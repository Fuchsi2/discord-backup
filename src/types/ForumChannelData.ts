import { DefaultReactionEmoji, GuildForumTag, SortOrderType, ThreadAutoArchiveDuration } from 'discord.js';
import { BaseChannelData, ThreadChannelData } from './';

export interface ForumChannelData extends BaseChannelData {
    nsfw: boolean;
    parent?: string;
    topic?: string;
    rateLimitPerUser?: number;
    threads: ThreadChannelData[];
    defaultReactionEmoji: DefaultReactionEmoji;
    availableTags: GuildForumTag[];
    defaultAutoArchiveDuration: ThreadAutoArchiveDuration
    defaultThreadRateLimitPerUser: number;
    defaultSortOrder: SortOrderType
}
