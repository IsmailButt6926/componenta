import React from 'react'
import InfiniteScroll from 'react-infinite-scroll-component';

const InfinitScroll = (props) => {
    const { notificationLength, next, items, height, hasMore, refreshFunction } = props
    console.log("next", next)
    console.log("items", items)
    console.log("notificationLength", notificationLength)
    console.log("height", height)
    return (
        <div>
            <InfiniteScroll
                dataLength={notificationLength} //This is important field to render the next data
                next={next}
                hasMore={hasMore}
                height={height}
                loader={<h4>Loading...</h4>}
                endMessage={
                    <p style={{ textAlign: 'center' }}>
                        <b>Yay! You have seen it all</b>
                    </p>
                }
                refreshFunction={refreshFunction}
                pullDownToRefresh
                pullDownToRefreshThreshold={10}
                pullDownToRefreshContent={
                    <h3 style={{ textAlign: 'center' }}>&#8595; Pull down to refresh</h3>
                }
                releaseToRefreshContent={
                    <h3 style={{ textAlign: 'center' }}>&#8593; Release to refresh</h3>
                }
            >
                {items}
            </InfiniteScroll>
        </div>
    )
}

export default InfinitScroll