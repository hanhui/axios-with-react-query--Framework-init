
import { useState, useEffect } from 'react';
import { useQuery } from 'react-query'
import { userServices } from './services/'
function App(props) {
  const [status, setStatus] = useState(false)
  const {
    isLoading,
    isFetching,
    isError,
    data,
    refetch
  } = useQuery([{name:'hanhui',pwd:'pwd'}], userServices.login)

  return (
    <>
      {isLoading && <div>Loading...</div>}
      {isFetching && <div>Fetching...</div>}
      {isError && <div>Error</div>}
      {data && <div>{JSON.stringify(data)}</div>}
      <button onClick={() => {
        // 同 swr，可以通过改变 key 重新获取数据
        setStatus((pre) => !pre)
      }}>click</button>
    </>
  );
}

export default App;