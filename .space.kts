job("1clickcapital website") {
  startOn {
        gitPush {
            branchFilter {
                +"refs/heads/main"
            }
        }
    }
  
    container(displayName = "Build an Push frontend", image = "ubuntu") {
        shellScript {
            content = """
            	apt-get update
             	apt install -y curl openssl zip openssh-server sshpass build-essential
               	
            	curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.0/install.sh | bash
             	. /root/.bashrc
             	nvm install 16
              	npm install -g yarn
                yarn install
				npm ci 
                npm install @craco/craco
                npm run build
                cp -R ./fonts ./build/
                zip -r build.zip build/
                mkdir /root/.ssh
                ssh-keyscan 43.205.179.114 >> ~/.ssh/known_hosts
                SSHPASS="Test@123" sshpass -e  scp -r ./build/* ubuntu@43.205.179.114:/var/www/1clickcapital.com

            """
        }
    }
}
