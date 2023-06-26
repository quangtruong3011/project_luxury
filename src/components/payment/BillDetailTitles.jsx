import React from 'react'

function BillDetailTitles({ title, children }) {
  return (
    <div>
        <h5 className="font-[montserrat] text-sm font-semibold my-3">{title}</h5>
        <div className="w-full border-2 border-slate-300 p-1">{children}</div>
    </div>
  )
}

export default BillDetailTitles