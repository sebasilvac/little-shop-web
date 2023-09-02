'use client';

import { IoCartOutline } from 'react-icons/io5';
import { SimpleWidget } from './SimpleWidget';

export const WidgetGrid = () => {
  return (
    <div className="flex flex-wrap p-2 items-center justify-center">
      <SimpleWidget
        label='Contador'
        title={`${5}`}
        subtitle='productos agregados'
        icon={<IoCartOutline size={70} className='text-blue-600' />}
        href='/dashboard/counter'
      />
    </div>
  )
}
