import { useVideoPlayer, VideoView } from 'expo-video';
import { StyleSheet } from 'react-native';

const videoSource =
  'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4';

export default function Videoview() {
  const player = useVideoPlayer(videoSource, (player) => {
    player.loop = true;
    player.play();
    player.muted = true;
  });

  return <VideoView style={styles.video} player={player} nativeControls={false} contentFit="cover"/>;
}

const styles = StyleSheet.create({
  video: {
    position: 'absolute', // ocupa toda la pantalla
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'black',
  },
});
