<!doctype html>
<html lang="en">
 <head>
  <meta charset="gb2312">
  <meta name="Generator" content="EditPlus®">
  <meta name="Author" content="">
  <meta name="Keywords" content="">
  <meta name="Description" content="">
  <title>Document</title>
 </head>
 <body>

<%
set conn=Server.Createobject("adodb.Connection") 
str="dsn=mysql_person_position;Driver={mysql driver};server=127.0.0.1;uid=root;pwd=qdhlkj123456;database=person_position"
conn.open(str)
'response.Write(conn.state) '显示连接状态，若为1表示连接成功，若为0连接失败。
sql = "select * from new" 'SQL查询语句
set rs = conn.execute(sql)
if not rs.bof then
%>
<table width="167">
<tr>
<td width="76"><b>title</b></td>
<td width="79"><b>content</b></td>
</tr>
<%
do while not rs.eof
%>
<tr>
<td><%=rs("title")%></td>
<td><%=rs("content")%></td>
</tr>
<%
rs.movenext
loop
%>
</table>
<%
else
response.write("sorry, no data found.")
end If

rs.close
conn.close
set conn = nothing
set rs = Nothing


set conn2=Server.Createobject("adodb.Connection") 
str="dsn=mysql_person_position;Driver={mysql driver};server=127.0.0.1;uid=root;pwd=qdhlkj123456;database=person_position"
conn2.open(str)
dim id
id=request.queryString("id")
sql2 = "select * from new where id="&id
set rs2 = conn2.execute(sql2)
%>
<div><%=id%></div>
<div><%=rs2("title")%></div>
<%
rs2.close
conn2.close
set conn2 = nothing
set rs2 = Nothing
%>
</body>
</html>
