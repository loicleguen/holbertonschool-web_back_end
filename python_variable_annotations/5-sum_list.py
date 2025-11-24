#!/usr/bin/env python3
"""adding type annotations to the sum_list function"""
from typing import List


def sum_list(input_list: List[float]) -> float:
    """sums all the float numbers in a list and returns a float"""
    return sum(input_list)
