import { useEffectOnce } from 'react-use'
import { previewData } from 'next/headers'
import { client } from '../../lib/sanity.client'
import { groq } from 'next-sanity'

export default function Home() {
  const [data, setData] = useState(null)


  useEffectOnce(() => {
    const fetchData = async () => {
      const query = groq`
        *[_type=='project'] {
          
        }
      `
      const result = await client.fetch(query)
      setData(result)
    }
  })


  if (previewData()) {
    return <div>Preview Mode</div>
  }


  // const query = groq`
  //     *[_type=='project'] {

  //     }
  //   `

  return (
    <div>
      <h1>Not Preview</h1>

    </div>
  )

}