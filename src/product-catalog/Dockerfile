# Build your custom binary (same as official but with YOUR code)
FROM golang:1.24-bookworm AS builder
WORKDIR /app
COPY go.mod go.sum ./
RUN go mod download
COPY . .
RUN CGO_ENABLED=0 GOOS=linux go build -o product-catalog .

# Use official distroless base (secure + tiny)
FROM gcr.io/distroless/static-debian12:nonroot
WORKDIR /app
COPY --from=builder /app/product-catalog .
ENTRYPOINT ["./product-catalog"]
