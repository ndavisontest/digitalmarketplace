import { configure, addDecorator } from '@storybook/react';
import { withKnobs } from '@storybook/addon-knobs';
import '../pancake/css/pancake.min.css'

addDecorator(withKnobs);
configure(require.context('../stories', true), module);
