#!/usr/bin/env python3
"""Module that contains a function with type annotations"""
from typing import List, Union


def to_kv(k: str, v: Union[int, float]) -> tuple[str, float]:
    """Returns a tuple containing a string and an integer"""
    return (k, float(v * v))
