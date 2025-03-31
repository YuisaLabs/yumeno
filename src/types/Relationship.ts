import { RELATION_TYPE } from '@/lib/constants';

export interface Relationship {
  sourceTableId: string;
  sourceColumnId: string;
  targetTableId: string;
  targetColumnId: string;
  type: keyof typeof RELATION_TYPE;
}
