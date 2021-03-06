import { Theme, ThemeProvider as EmotionThemeProvider, useTheme as useEmotionTheme } from '@emotion/react';
import { StylesProvider, ThemeProvider as MuiThemeProvider } from '@material-ui/core/styles';
import React, { ReactNode } from 'react';
import { THEME } from './const';
import { GlobalStyles } from './GlobalStyles';

export interface IThemeProviderProps {
	children: ReactNode;
}

export function ThemeProvider({ children }: IThemeProviderProps) {
	return (
		<EmotionThemeProvider theme={THEME}>
			<MuiThemeProvider theme={THEME}>
				<StylesProvider injectFirst>
					<GlobalStyles />
					{children}
				</StylesProvider>
			</MuiThemeProvider>
		</EmotionThemeProvider>
	);
}

export const useTheme = (): Theme => useEmotionTheme();
