import 'dotenv/config';

interface BotInterface {
	client_token: string;
	client_id: string;
	client_secret: string;
}

export interface ProjectInterface {
	discordClient: BotInterface;
}

const config: ProjectInterface = {
	discordClient: {
		client_token: '',
		client_id: '',
		client_secret: '',
	},
};

export default config;
