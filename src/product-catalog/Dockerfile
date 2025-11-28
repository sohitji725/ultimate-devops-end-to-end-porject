FROM golang:1.22-alpine AS builder
WORKDIR /usr/src/app/

# Cache Go modules
RUN --mount=type=cache,target=/go/pkg/mod \
    --mount=type=cache,target=/root/.cache/go-build \
    go mod download

COPY go.mod go.sum ./
COPY . .

RUN go build -o product-catalog .

# Final stage - Alpine (has curl, works with OTEL)
FROM alpine:latest
WORKDIR /usr/src/app/

# Copy products folder and binary
COPY products/ ./products/
COPY --from=builder /usr/src/app/product-catalog ./

ENV PRODUCT_CATALOG_PORT=8088
ENTRYPOINT ["./product-catalog"]
