-- Problem solving using PUGofer functional programming language
--------------------------------------------------------------------------------------------------------------

--successsor function
succ : Int -> Int
succ.n = n+1
--------------------------------------------------------------------------------------------------------------
--predecessor function
pred : Int -> Int
pred.n = n-1
--------------------------------------------------------------------------------------------------------------
--q7. add odd numbers from given list

addOdd : [Int] -> Int
addOdd.[]=0
addOdd.(x::xs) = if mod.x.(2)==0 then addOdd.(xs) else x + addOdd.(xs)
--------------------------------------------------------------------------------------------------------------
--q8. invalid 
--------------------------------------------------------------------------------------------------------------
--q9. remove list of odd size from the list of list

lSize : [a] -> Int
lSize.[]=0
lSize.(y::ys) = lSize.ys +1

remOlist : [[a]] -> [[a]]

remOlist.[]=[]
remOlist.(x::xs) = if mod.(lSize.x).(2)==0 then x :: remOlist.(xs) else remOlist.(xs)
--------------------------------------------------------------------------------------------------------------
--q10. compare equal size list and return a list with 1 if L1 element is >= L2 element else return 0

compareList : [Int] -> [Int] -> [Int]

compareList.[].[]=[]
compareList.(x::xs).(y::ys) = if x>=y then a++[1] else a++[0] where a = compareList.(xs).(ys)
--------------------------------------------------------------------------------------------------------------
--q11. Reverse the list of numbers and add 1 into each

revAdd1 : [Int] -> [Int]
revAdd1.[x] = [x+1]
revAdd1.(x::xs) = revAdd1.(xs) ++ [x+1]
--------------------------------------------------------------------------------------------------------------
--q12. take number n and return n*2 + 3

func : Int -> Int
func.n = n*2 +3
--------------------------------------------------------------------------------------------------------------
--q13. give smallest number from the list
--use list size

smallest : [Int] -> Int
smallest.[p] = p
smallest.(x::y::xs) = if x>y then smallest.(y::xs) else smallest.(x::xs)

--------------------------------------------------------------------------------------------------------------
--q14. takes list of list and returns a list containing second largest numbers from the respective lists

--scndBigL : [[Int]] -> [Int]
--scndB : [Int] -> Int

--scndBigL.[[r]]=[r]
--scndBigL.(r::rs)=scndBigL.(rs) ++ (scndB.(r))

--scndB.(x::y::[])=if x>y then y else x
--scndB.(x::y::xs)=if x>y then scndB.(x::xs) else scndB.(y::xs)
--------------------------------------------------------------------------------------------------------------
--q15. take a number and give its factors in a list

factor : Int -> [Int]
factor.1 = [1]
factor.n = if mod.n.(m)==0 then factor.(n-1) ++[n] else factor.(n-1) where m = n