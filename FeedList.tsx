import React from 'react';
import { View, StyleSheet, FlatList } from 'react-native';
import FeedListItem from './FeedListItem';
import { Log } from '../context/LogContext';

interface Props {
    logs: Log[];
    onScrollToBottom?: (hidden: boolean) => void;
}

export default function FeedList({ logs, onScrollToBottom }: Props) {
    const onScroll = (e) => {
        // 예외처리 2: 해당 컴포넌트 재사용할때 FloatingWriteButton을 보여줄 필요가 없을 경우.
        if (!onScrollToBottom) {
            return;
        }

        const { contentSize, layoutMeasurement, contentOffset } = e.nativeEvent;
        const distanceFormBottom = contentSize.height - layoutMeasurement.height - contentOffset.y;

        // 예외처리 1: 콘텐츠가 적어서 스크롤이 필요 없는 상황
        if (contentSize.height > layoutMeasurement.height && distanceFormBottom < 72) {
            onScrollToBottom(true);
            console.info('바닥과 가까움');
        } else {
            onScrollToBottom(false);
            console.info('바닥과 멀어짐');
        }
    };
    return (
        <FlatList
            data={logs}
            style={styles.block}
            renderItem={({ item }) => <FeedListItem log={item} />}
            keyExtractor={(log) => log.id}
            ItemSeparatorComponent={() => <View style={styles.separator} />}
            onEndReached={(distanceFormEnd) => {
                console.info('바닥과 가까워졌어요!');
            }}
            onEndReachedThreshold={0.85} //콘텐츠의 85%까지 스크롤했을때 onEndReached 함수가 호출됩니다.
            onScroll={onScroll}
        />
    );
}

const styles = StyleSheet.create({
    block: {
        flex: 1,
    },
    separator: {
        backgroundColor: '#e0e0e0',
        height: 1,
        width: '100%',
    },
});
