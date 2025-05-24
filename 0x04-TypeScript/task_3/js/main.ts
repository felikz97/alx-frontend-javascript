console.log('✅ main.ts is running');
/// <reference path="./crud.d.ts" />

import { RowID, RowElement } from './interface';
import * as CRUD from './crud.js';

const obj: RowElement = { firstName: 'Guillaume', lastName: 'Salva' };
const newRowID: RowID = CRUD.insertRow(obj);
// Output: Insert row { firstName: "Guillaume", lastName: "Salva" }

const updatedRow: RowElement = { ...obj, age: 23 };
CRUD.updateRow(newRowID, updatedRow);
// Output: Update row 125 { firstName: "Guillaume", lastName: "Salva", age: 23 }

CRUD.deleteRow(newRowID);
// Output: Delete row id 125
