import React, { useEffect, useState } from 'react'
import { Button } from 'react-native'
import { EthereumProvider } from "@walletconnect/ethereum-provider"


const Provider = () => {

  const [provider, setProvider] = useState<any>()

  useEffect(()=>{
    const init = async ()=>{
      const _provider = await EthereumProvider.init({
        projectId: "bd4997ce3ede37c95770ba10a3804dad",
        optionalChains:[1, 5, 56, 42161, 11155111, 137],
        showQrModal: false
      })
      setProvider(_provider)
      _provider.on('display_uri', (uri: string) => {
        console.log("Uri!!!", uri)
      })
    }

    init()
  },[])

  function connect(){
    provider.enable()
  }
  return (
    <Button
  onPress={connect}
  title="Connect Wallet"
  color="#841584"
  accessibilityLabel="Learn more about this purple button"
/>
  )
}

export default Provider