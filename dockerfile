FROM golang:1.16-alpine
WORKDIR /app
ADD . /app
RUN go build -o Godate .
CMD ["/app/Godate"]
