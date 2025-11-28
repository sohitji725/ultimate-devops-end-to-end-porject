FROM golang:1.22-alpine AS builder
WORKDIR /app

# Copy go.mod and go.sum first
COPY go.mod go.sum ./
RUN go mod download

# Copy the rest of the code
COPY . .

# Build
RUN go build -o product-catalog .

# Final image – Alpine (has curl, shell, CA certs → everything works)
FROM alpine:latest
WORKDIR /app

# Copy products folder and binary
COPY products ./products/
COPY --from=builder /app/product-catalog .

ENV PRODUCT_CATALOG_PORT=8088
ENTRYPOINT ["./product-catalog"]
