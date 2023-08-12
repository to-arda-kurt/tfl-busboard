import type { IMainContext } from '@root/types/context'
import { createContext } from 'react';

const mainContext = createContext<IMainContext | null>(null);

export default mainContext;