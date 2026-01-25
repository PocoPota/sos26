import { z } from "zod";
import { tsukubaEmailSchema } from "./email";

/**
 * ユーザーステータス
 * - ACTIVE: 有効
 * - DISABLED: 無効化
 */
export const userStatusSchema = z.enum(["ACTIVE", "DISABLED"]);
export type UserStatus = z.infer<typeof userStatusSchema>;

/**
 * ユーザーロール
 * - PLANNER: 企画者
 * - COMMITTEE_MEMBER: 委員会メンバー
 * - COMMITTEE_ADMIN: 委員会管理者
 * - SYSTEM_ADMIN: システム管理者
 */
export const userRoleSchema = z.enum([
	"PLANNER",
	"COMMITTEE_MEMBER",
	"COMMITTEE_ADMIN",
	"SYSTEM_ADMIN",
]);
export type UserRole = z.infer<typeof userRoleSchema>;

/**
 * ユーザースキーマ
 * Firebase UIDと紐づくアプリケーションユーザー
 */
export const userSchema = z.object({
	id: z.cuid(),
	firebaseUid: z.string().min(1).max(128),
	email: tsukubaEmailSchema,
	firstName: z.string(),
	lastName: z.string(),
	role: userRoleSchema,
	status: userStatusSchema,
	createdAt: z.date(),
	updatedAt: z.date(),
});
export type User = z.infer<typeof userSchema>;
