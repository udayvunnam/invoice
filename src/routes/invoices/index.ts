import type { RequestHandler } from '@sveltejs/kit';
import {
	rand,
	randCompanyName,
	randCurrencyCode,
	randFullName,
	randNumber,
	randRecentDate,
	randUuid
} from '@ngneat/falso';

export type Invoice = {
	billTo: {
		name: string;
		company: string;
	};
	amount: {
		value: string;
		currency: string;
	};
	payment: 'done' | 'todo' | 'in process';
	date: string;
	uid: string;
};

const getInvoices = async () => {
	return new Promise<Invoice[]>((res) => {
		setTimeout(() => {
			const data = [];
			for (let index = 0; index < 10; index++) {
				data.push({
					billTo: {
						name: randFullName(),
						company: randCompanyName()
					},
					amount: {
						value: randNumber({ min: 50, max: 5000 }),
						currency: randCurrencyCode()
					},
					payment: rand(['done', 'todo', 'in process']),
					date: randRecentDate(),
					uid: randUuid()
				});
			}
			res(data);
		}, 200);
	});
};

export const get: RequestHandler = async () => {
	const invoices = await getInvoices();

	if (invoices) {
		return {
			body: {
				invoices
			}
		};
	}

	return {
		status: 404
	};
};
