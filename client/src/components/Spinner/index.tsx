import React from 'react';
import { Dimmer, Loader } from 'semantic-ui-react';

const Spinner:React.FC = () => (
    <Dimmer active>
        <Loader />
    </Dimmer>
);

export default Spinner;
