<view class="sWhole_box"><view class="score_container"><text class="score_text">类型</text><input type="text" placeholder="招领或报失" value="{{losType}}"/></view><view class="score_container"><text class="score_text">物品</text><input type="text" placeholder="请填写物品名..." value="{{lostName}}"/></view><view class="score_container"><text class="score_text">种类</text><picker mode="selector" value="{{typeRangeNum}}" range="{{typeRange}}" data-event-opts="{{[['change',[['typeSelect',['$event']]]]]}}" bindchange="__e"><view>{{typeRange[typeRangeNum]}}</view></picker></view><view class="lost_guide">联系人</view><view class="score_container"><text class="score_text">姓名</text><input type="text" placeholder="请填写联系人姓名" data-event-opts="{{[['input',[['inputNum',['$event']]]]]}}" value="{{owerName}}" bindinput="__e"/></view><view class="score_container"><text class="score_text">电话</text><input type="text" placeholder="请填写手机号" data-event-opts="{{[['input',[['inputNum',['$event']]]]]}}" value="{{owerTel}}" bindinput="__e"/></view><view class="score_container"><text class="score_text">地址</text><input type="text" placeholder="请填写联系地址" data-event-opts="{{[['input',[['inputNum',['$event']]]]]}}" value="{{owerAddress}}" bindinput="__e"/></view><view class="lost_guide">物品描述</view><view class="score_container"><input type="text" placeholder="请填写物品描述" data-event-opts="{{[['input',[['inputNum',['$event']]]]]}}" value="{{owerAddress}}" bindinput="__e"/></view><view class="lost_guide">物品图片</view><view class="take_photo"><text data-event-opts="{{[['tap',[['takePhoto',['$event']]]]]}}" class="iconfont icon-tubiaozhizuomoban" style="font-size:80px;" bindtap="__e"></text><view class="{{[isActive?'active':'']}}"></view></view><button type="primary">发布</button></view>