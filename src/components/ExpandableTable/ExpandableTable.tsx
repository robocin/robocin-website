import React from 'react'

import { ArrowIcon } from '@/assets'

import { ExpandableTableProps } from './interfaces'
import * as S from './ExpandableTable.styles'

const ExpandableTable = ({
  data,
  isTableOpen,
  onChangeTable,
}: ExpandableTableProps) => {
  return (
    <S.Container>
      <S.TopBar onClick={onChangeTable} data-testid="topbar">
        <S.Arrow
          src={ArrowIcon}
          alt={'Seta para expandir'}
          open={isTableOpen}
        />
        <p>{data?.label}</p>
      </S.TopBar>
      {isTableOpen && (
        <S.Table data-testid="table">
          <tr>
            {data?.th?.map((cell: string) => (
              <th>{cell}</th>
            ))}
          </tr>
          {data?.trs?.map((row: string[]) => (
            <tr>
              {row?.map((cell: string) => (
                <td>{cell}</td>
              ))}
            </tr>
          ))}
        </S.Table>
      )}
    </S.Container>
  )
}

export default ExpandableTable
