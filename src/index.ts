import { CommandInterface, EventInterface } from '@projectdiscord/shared';
import { Client, Collection, GatewayIntentBits, Partials } from 'discord.js';
import config, { ProjectInterface } from './config.js';

import { PrismaClient } from '@prisma/client';
import { logger } from './logger.js';

const prisma = new PrismaClient({
	log: [
		{ emit: 'event', level: 'query' },
		{ emit: 'event', level: 'info' },
		{ emit: 'event', level: 'warn' },
		{ emit: 'event', level: 'error' },
	],
}); 

export class DiscordClient extends Client {
	public commands: Collection<string, CommandInterface> = new Collection();
	public events: Collection<string, EventInterface> = new Collection();
	public primsa: typeof prisma;
	public config: ProjectInterface;

	constructor() {
		super({
			intents: [
				GatewayIntentBits.AutoModerationConfiguration,
				GatewayIntentBits.AutoModerationExecution,
				GatewayIntentBits.DirectMessagePolls,
				GatewayIntentBits.DirectMessageReactions,
				GatewayIntentBits.DirectMessageTyping,
				GatewayIntentBits.DirectMessages,
				GatewayIntentBits.GuildExpressions,
				GatewayIntentBits.GuildIntegrations,
				GatewayIntentBits.GuildInvites,
				GatewayIntentBits.GuildMembers,
				GatewayIntentBits.GuildMessagePolls,
				GatewayIntentBits.GuildMessageReactions,
				GatewayIntentBits.GuildMessageTyping,
				GatewayIntentBits.GuildMessages,
				GatewayIntentBits.GuildModeration,
				GatewayIntentBits.GuildPresences,
				GatewayIntentBits.GuildScheduledEvents,
				GatewayIntentBits.GuildVoiceStates,
				GatewayIntentBits.GuildWebhooks,
				GatewayIntentBits.Guilds,
				GatewayIntentBits.MessageContent,
			],
			partials: [
				Partials.Channel,
				Partials.GuildMember,
				Partials.GuildScheduledEvent,
				Partials.Message,
				Partials.Reaction,
				Partials.SoundboardSound,
				Partials.ThreadMember,
				Partials.User,
			],
		});

		this.primsa = prisma;
		this.config = config;

		prisma.$on('query', (e: Error) => {
			logger.debug(`Prisma Query: ${e.message}`, e);
		});
		prisma.$on('info', (e: Error) => {
			logger.info(`Prisma Info: ${e.message}`);
		});
		prisma.$on('warn', (e: Error) => {
			logger.warn(`Prisma Warning: ${e.message}`);
		});
		prisma.$on('error', (e: Error) => {
			logger.error(`Prisma Error: ${e.message}`);
		});
	}
}
