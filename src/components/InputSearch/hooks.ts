import { useCallback } from "react";

export function useSearchHandlers(params: {
	value?: string;
	onSearch?: (term: string) => void;
	onKeyDown?: (e: React.KeyboardEvent<HTMLInputElement>) => void;
	onClick?: () => void;
}) {
	const { value, onSearch, onKeyDown, onClick } = params;

	const handleKeyDown = useCallback(
		(e: React.KeyboardEvent<HTMLInputElement>) => {
			if (e.key === "Enter" && onSearch) onSearch(value ?? "");
			onKeyDown?.(e);
		},
		[onSearch, value, onKeyDown]
	);

	const handleIconClick = useCallback(() => {
		onSearch?.(value ?? "");
		onClick?.();
	}, [onSearch, value, onClick]);

	return { handleKeyDown, handleIconClick } as const;
}
