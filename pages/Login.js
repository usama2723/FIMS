import { TouchableOpacity, StyleSheet, View } from 'react-native';
import { Button, TextInput,Avatar,Card, Text } from 'react-native-paper';



const LeftContent = props => <Avatar.Icon {...props} icon="folder" />
const Login = (props) => {
    const { Navigation } = props;

    return (
        <View>
            <Button icon="camera" mode="contained" onPress={() => console.log('Pressed')}>
                Press me
            </Button>

            <TextInput
                label="Email"


            />

            <Card>
                <Card.Title title="Card Title" subtitle="Card Subtitle" left={LeftContent} />
                <Card.Content>
                    <Text variant="titleLarge">Card title</Text>
                    <Text variant="bodyMedium">Card content</Text>
                </Card.Content>
                <Card.Cover source={{ uri: 'https://picsum.photos/700' }} />
                <Card.Actions>
                    <Button>Cancel</Button>
                    <Button>Ok</Button>
                </Card.Actions>
            </Card>
        </View>


    )
}

export default Login