<view class="sWhole_box data-v-58a2c1f2"><view class="login_box data-v-58a2c1f2"><image src="../../../static/search.png" mode class="data-v-58a2c1f2"></image><text class="data-v-58a2c1f2">{{loginTitle}}</text></view><view class="score_container data-v-58a2c1f2"><text class="data-v-58a2c1f2">考号</text><input type="text" placeholder="请输入15位考试或笔试准考证号" data-event-opts="{{[['input',[['inputNum',['$event']]]]]}}" value="{{stuNum}}" bindinput="__e" class="data-v-58a2c1f2"/></view><view class="score_container data-v-58a2c1f2"><text class="data-v-58a2c1f2">姓名</text><input placeholder="超过3个字,可只输入前3个字" data-event-opts="{{[['input',[['inputPasswd',['$event']]]]]}}" value="{{password}}" bindinput="__e" class="data-v-58a2c1f2"/></view><slot></slot><button data-event-opts="{{[['tap',[['login',['$event']]]]]}}" class="btn_type data-v-58a2c1f2" bindtap="__e">{{btnText}}</button></view>