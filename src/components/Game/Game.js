import React, { useState } from 'react';

import { sample } from '../../utils';
import { WORDS } from '../../data';
import MyForm from '../MyForm/MyForm';

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {

  return <MyForm />
}

export default Game;
