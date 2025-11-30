# Configure the AWS Provider
provider "aws" {
  region  = "ap-south-1"
}

resource "aws_s3_bucket" "s3_bucket" {
    bucket = "demo-terraform-eks-state-bucket-sohit"
    region = "ap-south-1"

    lifecycle {
      prevent_destroy = false
    }
  
}

resource "aws_dynamodb_table" "basic-dynamodb-table" {
  name           = "terraform-state-locking"
  billing_mode   = "PAY_PER_REQUEST"
  region = "ap-south-1"
 
  hash_key       = "LockId"

  attribute {
    name = "LockId"
    type = "S"
  }
  }
