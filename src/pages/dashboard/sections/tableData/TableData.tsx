import { FC } from 'react'
import { EnhancedTable } from '../../../../components/Table/Table'

import { tableColumns } from './columns'

import { TableDataType } from './TableData.types'

/**
 * Pages - Dashboard -> Sections -> TableData
 */
export const TableData: FC<TableDataType> = ({ data, count, page, handleChangePage }) => {
    return (
        <div>
            <EnhancedTable
                columns={tableColumns}
                rows={data}
                count={count}
                page={page}
                handleChangePage={handleChangePage}
            />
        </div>
    )
}