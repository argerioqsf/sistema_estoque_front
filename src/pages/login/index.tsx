import React, { useContext } from 'react';
import { UserContext } from '../../contexts/UserContext';
import {
    Form
} from './componets';

import {
    Container
} from './styles';

function login() {
    return (
        <Container>
            <Form/>
        </Container>
    );
}

export default login;