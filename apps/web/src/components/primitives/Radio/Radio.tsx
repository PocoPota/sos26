import { Radio as RadixRadio, Text } from "@radix-ui/themes";
import { useId } from "react";
import styles from "./Radio.module.scss";

/**
 * Radio - アプリケーション標準のラジオボタン（単体使用）
 *
 * @see https://www.radix-ui.com/themes/docs/components/radio
 *
 * ## 制限していること
 * - size: "1" | "2" のみ（"3" は大きすぎるため不可）
 * - variant: "surface" 固定（デザイン統一）
 * - highContrast: 指定不可
 *
 * ## 付加している振る舞い
 * - label 必須（a11y 保証）
 * - id 自動生成（label と input の紐付け）
 */

type RadioProps = {
	label: string;
	name: string;
	value: string;
	size?: "1" | "2";
	checked?: boolean;
	defaultChecked?: boolean;
	onValueChange?: (value: string) => void;
	disabled?: boolean;
	required?: boolean;
};

export function Radio({
	label,
	name,
	value,
	size = "2",
	checked,
	defaultChecked,
	onValueChange,
	disabled,
	required,
}: RadioProps) {
	const id = useId();

	return (
		<label htmlFor={id} className={styles.label}>
			<RadixRadio
				id={id}
				name={name}
				value={value}
				size={size}
				variant="surface"
				checked={checked}
				defaultChecked={defaultChecked}
				onValueChange={onValueChange}
				disabled={disabled}
				required={required}
			/>
			<Text size={size}>{label}</Text>
		</label>
	);
}
