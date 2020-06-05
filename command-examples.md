## Subs

    curl -s -v --no-buffer 'http://localhost:8080/sub/my_channel_1'
    curl -s -v --no-buffer 'http://localhost:8080/sub/your_channel_1'
    curl -s -v --no-buffer 'http://localhost:8080/sub/your_channel_2'

## Pubs

    curl -s -v -X POST 'http://localhost:8080/pub?id=my_channel_1' -d 'Hello World!'
    curl -s -v -X POST 'http://localhost:8080/pub?id=your_channel_1' -d 'Hi everybody!'
    curl -s -v -X POST 'http://localhost:8080/pub?id=your_channel_2' -d 'Goodbye!'

## Channels Stats for publisher (json format)

    curl -s -v 'http://localhost:8080/pub?id=my_channel_1'

## All Channels Stats summarized (json format)

    curl -s -v 'http://localhost:8080/channels-stats'

## All Channels Stats detailed (json format)

    curl -s -v 'http://localhost:8080/channels-stats?id=ALL'

## Prefixed Channels Stats detailed (json format)

    curl -s -v 'http://localhost:8080/channels-stats?id=your_channel_*'

## Channels Stats (json format)

    curl -s -v 'http://localhost:8080/channels-stats?id=my_channel_1'

## Delete Channels

    curl -s -v -X DELETE 'http://localhost:8080/pub?id=my_channel_1'
