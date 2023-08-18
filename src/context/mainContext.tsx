import type { MainContextType } from '@root/types/context'
import { createContext } from 'react';

const mainContext = createContext<MainContextType | null>(null);

export default mainContext;