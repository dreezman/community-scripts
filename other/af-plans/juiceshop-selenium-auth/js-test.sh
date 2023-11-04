# Ensure that ZAP is set to the full path of the zap.sh script installed

# Standard macOS location
# ZAP=/Applications/OWASP/ ZAP.app/Contents/Java/zap.sh

ZAP='/mnt/c/Program Files/ZAP/Zed Attack Proxy/zap.sh'
APPDIR='/mnt/c/Users/edree/ZAP/community-scripts/other/af-plans/juiceshop-selenium-auth/'
export SessFile=$APPDIR"JuiceShopSession.js"
export AuthFile=$APPDIR"JuiceShopAuthentication.js"
echo $SessFile
echo $AuthFile
export JS_USER=test@test.com
export JS_PWD=test123

cd $APPDIR
"$ZAP" -cmd -autorun $APPDIR"juiceshop-test.yaml"

