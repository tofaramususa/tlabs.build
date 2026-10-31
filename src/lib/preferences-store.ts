"use client";

import {
	DEFAULT_THEME_PREFERENCES,
	type ThemeMode,
	type ThemePreferences,
	type ThemePreset,
} from "./theme";

class PreferencesStore {
	private state: ThemePreferences = DEFAULT_THEME_PREFERENCES;
	private listeners: (() => void)[] = [];

	getState = (): ThemePreferences => this.state;

	setState = (newState: Partial<ThemePreferences>) => {
		this.state = { ...this.state, ...newState };
		for (const listener of this.listeners) listener();
	};

	subscribe = (listener: () => void) => {
		this.listeners.push(listener);
		return () => {
			const index = this.listeners.indexOf(listener);
			if (index > -1) {
				this.listeners.splice(index, 1);
			}
		};
	};

	setThemeMode = (mode: ThemeMode) => {
		this.setState({ mode });
	};

	setThemePreset = (preset: ThemePreset) => {
		this.setState({ preset });
	};

	setTheme = (preferences: ThemePreferences) => {
		this.setState(preferences);
	};
}

export const preferencesStore = new PreferencesStore();
