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
	guilds: ObjectNameIDArray;
}

const config: ProjectInterface = {
	client: {
		client_token: process.env.CLIENT_TOKEN as string,
		client_id: process.env.CLIENT_ID as string,
		client_secret: process.env.CLIENT_SECRET as string,
		client_prefix: '?',
	},
	guilds: [
		{
			name: '',
			id: '',
		},
	],
};

export default config;
