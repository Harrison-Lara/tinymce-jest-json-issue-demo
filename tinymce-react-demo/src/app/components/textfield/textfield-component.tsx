
import * as React from 'react';
import { makeStyles, Theme } from '@material-ui/core';
import MatTextField from '@material-ui/core/TextField';
interface TextFieldStandardProps extends TextFieldBaseProps {
    variant?: 'standard';
}

interface TextFieldFilledProps extends TextFieldBaseProps {
    variant: 'filled';
}

interface TextFieldOutlinedProps extends TextFieldBaseProps {
    variant: 'outlined';
}

type MarginType = 'dense' | 'normal' | 'none';

export type TextFieldProps = TextFieldStandardProps | TextFieldFilledProps | TextFieldOutlinedProps;

const useStyles = makeStyles((theme: Theme) => ({
    textFieldRoot: {
        '& [class*="MuiFormLabel"]': {
            color: theme.palette.text.secondary,
            fontWeight: theme.typography.fontWeightMedium,
            fontSize: theme.typography.overline.fontSize
        },
        '& [class*="MuiInputBase"]': {
            fontSize: theme.typography.body2.fontSize,
            fontWeight: theme.typography.fontWeightMedium,
            color: theme.palette.text.primary
        },
        '& [class*="disabled"]': {
            backgroundColor: theme.palette.background.default
        }
    }
}));

interface TextFieldBaseProps {
    value?: string;
    disabled?: boolean;
    error?: boolean;
    fullWidth?: boolean;
    helperText?: string;
    label?: string;
    placeholder?: string;
    type?: string;
    onChange?: React.ChangeEventHandler<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>;
    required?: boolean;
    margin?: MarginType;
    variant?: 'filled' | 'outlined' | 'standard';
}

const TextField: React.FunctionComponent<TextFieldProps> = props => {
    const { label, placeholder } = props;
    const { textFieldRoot } = useStyles();
    return <MatTextField className={textFieldRoot} {...props} aria-label={label || placeholder} />;
};

TextField.defaultProps = {
    margin: 'normal',
    fullWidth: true,
    label: '',
    variant: 'filled'
};

export { TextField };