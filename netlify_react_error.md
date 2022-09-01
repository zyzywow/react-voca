react주소창에 엔터할때 pagenotfound 뜨는거
build폴더->netlify.toml->[[redirects]]
from="https://resilient-toffee-12b236.netlify.app/voca/*"
to="https://resilient-toffee-12b236.netlify.app/"
status = 301
force = true
적용시킬주소마다 from에적어주고 to는 새로고침후 나올화면
from에 주소끝 /_는 뒤에오는 모든주소에 적용시키겠다는 뜻
ex) voca/_
