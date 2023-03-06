import { Theme } from './symbols';
import { ThemeEnum } from './theme.enum';

export const lightTheme: Theme = 
{
    name: ThemeEnum.light,
    properties: 
    {
        // Alterados
        '--background-page': '#F4F7F8',
        '--background-cards': '#fff',
        '--background-cards-2': '#EEF2F4',
        '--background-cards-3': '#222',

        '--title': '#2c3e50',
        '--border': '#ddd',
        '--primary': '#814CF1',
        '--primary-background': '#CBB7F6',
        '--placeholder': '#B1B2B4',
        
        '--error': '#f2135d',
        '--error-background': '#FFDBDB',
        '--success': '#17c964',
        '--warning': '#ff8200',
        '--warning-font': '#cc9500',
        '--warning-background': '#F4F2E9',
    }
};
