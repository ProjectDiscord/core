import { ObjectNameIDArray } from '@projectdiscord/shared';
import 'dotenv/config';

interface BotInterface {
	client_token: string;
	client_id: string;
	client_secret: string;
	client_prefix: string;
}

export interface ProjectInterface {
	client: BotInterface;
	helper: BotInterface;
	guilds: ObjectNameIDArray;
	colors: {
		success: number;
		error: number;
		warning: number;
		info: number;
		secondary: number;
		primary: number;
	};
}

const config: ProjectInterface = {
	client: {
		client_token: process.env.CLIENT_TOKEN as string,
		client_id: process.env.CLIENT_ID as string,
		client_secret: process.env.CLIENT_SECRET as string,
		client_prefix: process.env.CLIENT_PREFIX as string,
	},
	helper: {
		client_token: process.env.HELPER_CLIENT_TOKEN as string,
		client_id: process.env.HELPER_CLIENT_ID as string,
		client_secret: process.env.HELPER_CLIENT_SECRET as string,
		client_prefix: process.env.HELPER_CLIENT_PREFIX as string,
	},
	guilds: [
		{
			name: 'Project Discord',
			id: '1396235829579485214',
		},
	],
	colors: {
		success: 0x57f287,
		error: 0xed4245,
		warning: 0xfaa61a,
		info: 0x5865f2,
		secondary: 0x37373d,
		primary: 0x5865f2,
	},
};

export default config;
