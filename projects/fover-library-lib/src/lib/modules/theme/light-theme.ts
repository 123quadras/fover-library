import { Theme } from './symbols';
import { ThemeEnum } from './theme.enum';

export const lightTheme: Theme = 
{
    name: ThemeEnum.light,
    properties: 
    {
        // Backgrounds
        '--background-page': '#F4F7F8',
        '--background-cards': '#FFFFFF',
        '--background-cards-2': '#EEF2F4',

        // Tipografias
        '--title': '#2C3E50',
        '--placeholder': '#B1B2B4',
        
        // Borders
        '--border': '#DDDDDD',
        
        // Defaults
        '--primary': '#814CF1',
        '--primary-1': '#811EF1',
        '--primary-2': '#8178F1',
        
        // Auxiliares
        '--success': '#17c964',
        '--success-1': '#17A064',
        '--success-2': '#17F064',
        '--error': '#f2135d',
        '--error-1': '#BE154D',
        '--error-2': '#F2505D',
        '--warning': '#FFA000',
        '--warning-1': '#FF8200',
        '--warning-2': '#FFBE00',
    }
};
