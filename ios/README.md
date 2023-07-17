* Install rvm `\curl -sSL https://get.rvm.io | bash -s stable --ruby`
* Install special openssl for ruby `rvm pkg install openssl`
* Install ruby 2.7.7 with special openssl `rvm install "ruby-2.7.7" --with-openssl-dir=$HOME/.rvm/usr` (use `reinstall` if already tried)
* Reselect Xcode command line tools - see https://stackoverflow.com/a/68579858/235648
