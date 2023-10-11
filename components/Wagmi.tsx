import { Button, Text } from 'react-native'
import { useAccount, useConnect, useEnsName } from 'wagmi'
import { mainnet } from 'wagmi'
import { WalletConnectConnector } from '../connectors/walletConnect'

export default function Profile() {
  const { address, isConnected } = useAccount()
  const { data: ensName } = useEnsName({ address })
  const { connect } = useConnect({
    connector: new WalletConnectConnector({ 
      chains:[mainnet, mainnet],
      options:{ projectId:'bd4997ce3ede37c95770ba10a3804dad', showQrModal: false } 
    }),
  })
 
  if (isConnected) return <Text>Connected to {ensName ?? address}</Text>
  return <Button
  onPress={() => connect()}
  title="Connect Wallet with Wagmi"
  color="#841584"
  accessibilityLabel="Learn more about this purple button"
/>
}