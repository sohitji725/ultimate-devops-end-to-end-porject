
ubuntu@ip-172-31-33-43:~$ history
    1  curl "https://awscli.amazonaws.com/awscli-exe-linux-x86_64.zip" -o "awscliv2.zip"
    2  unzip awscliv2.zip
    3  sudo ./aws/install
    4  sudo apt update
    5  sudo apt installl unzip
    6  curl "https://awscli.amazonaws.com/awscli-exe-linux-x86_64.zip" -o "awscliv2.zip"
    7  unzip awscliv2.zip
    8  sudo ./aws/install
    9  sudo apt install unzip
   10  curl "https://awscli.amazonaws.com/awscli-exe-linux-x86_64.zip" -o "awscliv2.zip"
   11  unzip awscliv2.zip
   12  sudo ./aws/install
   13  aws configure
   14  curl -o kubectl https://amazon-eks.s3.amazonaws.com/1.30.0/2024-06-14/bin/linux/amd64/kubectl
   15  chmod +x ./kubectl
   16  sudo mv ./kubectl /usr/local/bin/kubectl
   17  aws eks update kubeconfig --region ap-south-1 --name my-eks-cluster
   18  aws eks update-kubeconfig --region ap-south-1 --name my-eks-cluster
   19  aws get nodes
   20  kubectl get nodes
   21  kubectl get context
   22  kubectl config view
   23  sudo rm /usr/local/bin/kubectl
   24  rm kubectl
   25  sudo rm /usr/local/bin/kubectl
   26  rm kubectl
   27  sudo rm /usr/local/bin/kubectl
   28  rm kubectl
   29  sudo rm /usr/local/bin/kubectl
   30  sudo rm /usr/local/bin/kubectl rm kubectl
   31  ls -l /usr/local/bin/kubectl
   32  ls -l kubectl
   33  curl -LO "https://dl.k8s.io/release/$(curl -L -s https://dl.k8s.io/release/stable.txt)/bin/linux/amd64/kubectl"
   34  chmod +x kubectl
   35  sudo mv kubectl /usr/local/bin/
   36  kubectl version --client
   37  kubectl get nodes
   38  kubectl get sa
   39  kubectl get svc
   40  kubectl config view
   41  aws eks update-kubeconfig --region ap-south-1 --name my-eks-cluster
   42  kubectl config current context
   43  kubectl config current-context
   44  kubectl get nodes
   45  git clone https://github.com/iam-veeramalla/ultimate-devops-project-demo.git
   46  cd ultimate-devops-project-demo/
   47  ls
   48  cd kubernetes/
   49  ls
   50  kubectl apply -f serviceaccount.yaml
   51  kubectl get sa
   52  kubectl get svc
   53  kubectl apply -f complete-deploy.yaml
   54  kubectl get pods
   55  kubectl get svc
   56  kubectl get pods
   57  kubectl get svc
   58  kubectl edit svc opentelemetry-demo-frontendproxy
   59  kubectl get svc
   60  kubectl get svc | grep frontend
   61  kubectl edit svc opentelemetry-demo-frontendproxy
   62  kubectl get svc | grep frontend
   63  eksctl version
   64  # for ARM systems, set ARCH to: `arm64`, `armv6` or `armv7`
   65  ARCH=amd64
   66  PLATFORM=$(uname -s)_$ARCH
   67  curl -sLO "https://github.com/eksctl-io/eksctl/releases/latest/download/eksctl_$PLATFORM.tar.gz"
   68  # (Optional) Verify checksum
   69  curl -sL "https://github.com/eksctl-io/eksctl/releases/latest/download/eksctl_checksums.txt" | grep $PLATFORM | sha256sum --check
   70  tar -xzf eksctl_$PLATFORM.tar.gz -C /tmp && rm eksctl_$PLATFORM.tar.gz
   71  sudo install -m 0755 /tmp/eksctl /usr/local/bin && rm /tmp/eksctl
   72  tar -xzf eksctl_$PLATFORM.tar.gz -C /tmp && rm eksctl_$PLATFORM.tar.gz
   73  eksctl version
   74  export cluster_name=my-eks-cluster
   75  oidc_id=$(aws eks describe-cluster --name $cluster_name --query "cluster.identity.oidc.issuer" --output text | cut -d '/' -f 5)
   76  aws iam list-open-id-connect-providers | grep $oidc_id | cut -d "/" -f4\n
   77  echo $oicd
   78  echo $oicd_id
   79  oidc_id=$(aws eks describe-cluster --name $cluster_name --query "cluster.identity.oidc.issuer" --output text | cut -d '/' -f 5)
   80  echo $oicd_id
   81  oidc_id=$(aws eks describe-cluster --name $cluster_name --query "cluster.identity.oidc.issuer" --output text | cut -d '/' -f 5)
   82  echo $oicd_id
   83  echo $oidc_id
   84  eksctl utils associate-iam-oidc-provider --cluster $cluster_name --approve
   85  cd ..
   86  ls
   87  curl -O https://raw.githubusercontent.com/kubernetes-sigs/aws-load-balancer-controller/v2.11.0/docs/install/iam_policy.json
   88  ls
   89  aws iam create-policy     --policy-name AWSLoadBalancerControllerIAMPolicy     --policy-document file://iam_policy.json
   90  eksctl create iamserviceaccount   --cluster=<your-cluster-name>   --namespace=kube-system   --name=aws-load-balancer-controller   --role-name AmazonEKSLoadBalancerControllerRole   --attach-policy-arn=arn:aws:iam::policy/AWSLoadBalancerControllerIAMPolicy   --approve
   91  eksctl create iamserviceaccount   --cluster=my-eks-cluster   --namespace=kube-system   --name=aws-load-balancer-controller   --role-name AmazonEKSLoadBalancerControllerRole   --attach-policy-arn=arn:aws:iam::325956215024:policy/AWSLoadBalancerControllerIAMPolicy   --approve
   92  helm repo add eks https://aws.github.io/eks-charts
   93  # Output: "eks" has been added to your repositories
   94  helm repo add eks https://aws.github.io/eks-charts
   95  $ curl -fsSL -o get_helm.sh https://raw.githubusercontent.com/helm/helm/main/scripts/get-helm-4
   96  $ chmod 700 get_helm.sh
   97  $ ./get_helm.sh
   98  $ curl -fsSL -o get_helm.sh https://raw.githubusercontent.com/helm/helm/main/scripts/get-helm-4
   99  $ chmod 700 get_helm.sh
  100  $ ./get_helm.sh
  101  curl https://raw.githubusercontent.com/helm/helm/main/scripts/get-helm-4 | bash
  102  $ chmod 700 get_helm.sh
  103  ls
  104  $ chmod 700 get_helm.sh
  105  helm repo add eks https://aws.github.io/eks-charts
  106  helm repo update eks
  107  helm install aws-load-balancer-controller eks/aws-load-balancer-controller \
  108    -n kube-system \
  109    --set clusterName=<your-cluster-name> \
  110    --set serviceAccount.create=false \
  111    --set serviceAccount.name=aws-load-balancer-controller \
  112    --set region=<region> \
  113    --set v
  114  helm install aws-load-balancer-controller eks/aws-load-balancer-controller -n kube-system   --set clusterName=my-eks-cluster   --set serviceAccount.create=false   --set serviceAccount.name=aws-load-balancer-controller   --set region=ap-south-1   --set vpcId=vpc-07575cd36007f6ece
  115  kubectl get pods --n kube-system
  116  kubectl get pods -n kube-system
  117  kubectl get deployment -n kube-system aws-load-balancer-controller
  118  cd ultimate-devops-project-demo/
  119  cd kubernetes/
  120  cd frontend
  121  cd ..
  122  cd frontendproxy/
  123  ls
  124  vim ingress.yml
  125  mv ingress.yaml ingress.yml
  126  vim ingress.yaml
  127  ls
  128  vim ingress.yml
  129  kubectl apply -f ingress.yml
  130  exit
  131  nslookup k8s-default-frontend-6e54782b3e-1141999895.ap-south-1.elb.amazonaws.com
  132  exit
  133  kubectl get ingress -n kube-system
  134  kubectl get ing
  135  nslookup k8s-default-frontend-6e54782b3e-1141999895.ap-south-1.elb.amazonaws.com
  136  history
ubuntu@ip-172-31-33-4