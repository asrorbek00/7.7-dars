import React, { Suspense } from 'react'
import Repo from '../../../../components/Repo'
import RepoDir from '../../../../components/RepoDir'

function RepoPage({params: {name}}) {
  return (
    <div>
        <Suspense>
          <Repo name={name}/>
        </Suspense>
        <Suspense>
          <RepoDir name={name}/>
        </Suspense>
    </div>
  )
}

export default RepoPage